export interface Job {
    id: string;
    department: string;
    title: string;
}

export const ALL_JOBS: Job[] = [
    {
        id: '0001',
        department: 'Engineering',
        title: 'Machine Learning Researcher',
    },
    {
        id: '0002',
        department: 'Engineering',
        title: 'Software Engineer',
    },
    {
        id: '0003',
        department: 'General',
        title: 'General Application',
    },
];
