import { database } from "../database/index";
import { Connected } from "../models";
import { ConnectedInstance } from "../models/Connected";


export const connectedService = {
  save: async (connectedTrigger?: ConnectedInstance) => {
    return await Connected.create(connectedTrigger);
  },
  getConsume: async (startDateTime: string, endDateTime: string) => {
    const query = await Connected.sequelize?.query(
      `
      SELECT 
          ct.appliance_id,
          ROUND(SUM(EXTRACT(EPOCH FROM (dt.time_stamp - ct.time_stamp)) / 3600), 2) AS time_connected,
          ROUND(SUM(ct.real_power * EXTRACT(EPOCH FROM (dt.time_stamp - ct.time_stamp)) / 3600), 2) AS consume
      FROM 
          connecteds AS ct
          JOIN disconnecteds AS dt ON ct.id = dt.connected_id
      WHERE 
          ct.time_stamp >= '${startDateTime}' AND dt.time_stamp <= '${endDateTime}'
      GROUP BY 
          ct.appliance_id;
      `
    );
    return query ? query[0] : null;
  },
};
