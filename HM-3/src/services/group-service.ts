import { query } from '../data-access/db';
import { Group } from '../routers/groups/Group';

export class GroupService {
    getAllGroup() {
        return query('SELECT * FROM "public"."groups" LIMIT 100').then((res: any) => res.rows);
    }

    getGroupById(id: string) {
        return query(`SELECT * FROM "public"."groups" WHERE id = ${id};`).then((res: any) => res.rows);
    }

    createGroup(group: Group) {
        return query(`INSERT INTO Groups (id,name,permission) VALUES (${group.id}, '${group.name}', ARRAY${group.permission});`)
            .then((res: any) => res.rows);
    }

    updateGroup(id: string, group: Group) {
        return query(`UPDATE Groups SET id = '${group.id}', name = '${group.name}', permission = ARRAY${group.permission} WHERE id = ${id};`).then((res: any) => res.rows);
    }

    deleteGroup(id: string) {
        return query(`DELETE FROM Groups WHERE id = ${id};`).then((res: any) => res.rows);
    }
}

