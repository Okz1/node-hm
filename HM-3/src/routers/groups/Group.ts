type Permission = 'READ' | 'WRITE' | 'DELETE' | 'SHARE' | 'UPLOAD_FILES';

 export type Group = {
    id: number;
    name: string;
    permission: Permission[];
};
