export interface Job {
    id: string;
    department: string;
    title: string;
}

export const ALL_JOBS: Job[] = [
    {
        id: '0001',
        department: 'Engineering',
        title: 'Pre-Devinian Associate I',
    },
    {
        id: '0002',
        department: 'Engineering',
        title: 'Pre-Devinian Associate II',
    },
    {
        id: '0003',
        department: 'Project',
        title: "Kevin's dad",
    },
    {
        id: '0004',
        department: 'Project',
        title: "Kevin's mom",
    },
    {
        id: '0005',
        department: 'Sales',
        title: 'Chief Ideovator',
    },
    {
        id: '0006',
        department: 'Sales',
        title: 'Founder/CEO',
    },
    {
        id: '0007',
        department: 'Sales',
        title: 'Graph Drawerer',
    },
];
