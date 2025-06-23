export const MenuItem = [
    {
        label: "Home",
        path: "/home",
        icon: "MdHomeFilled",
        permission: 0,
    },
    {
        label: "Cadastros",
        icon: "HiMiniBookOpen",
        subItems: [
            {
                label: "Coletores",
                path: "/cadastro/coletor",
                permission: 0,
                icon: "Smartphone",
            },
            {
                label: "Cidades",
                path: "/cadastro/cidades",
                permission: 9,
                icon: "Building2",
            },
            {
                label: "Distrito",
                path: "/cadastro/distritos",
                permission: 9,
                icon: "LandPlot",
            },
            {
                label: "Regiões",
                path: "/retidas/carga",
                permission: 9,
                icon: "Compass",
            },
            {
                label: "Executor",
                path: "/retidas/carga",
                permission: 9,
                icon: "BookUser",
            },
            {
                label: "Redirecionamento",
                path: "/retidas/carga",
                permission: 9,
                icon: "ArrowDownUp",
            },
        ],
    },
    {
        label: "Relatórios",
        icon: "HiMiniBookOpen",
        subItems: [
            {
                label: "Coletores",
                path: "/cadastro/coletores",
                permission: 0,
                icon: "Smartphone",
            },
            {
                label: "Cidades",
                path: "/cadastros/coletores",
                permission: 9,
                icon: "Building2",
            },
            {
                label: "Distrito",
                path: "/retidas/carga",
                permission: 9,
                icon: "LandPlot",
            },
            {
                label: "Regiões",
                path: "/retidas/carga",
                permission: 9,
                icon: "Compass",
            },
            {
                label: "Executor",
                path: "/retidas/carga",
                permission: 9,
                icon: "BookUser",
            },
            {
                label: "Redirecionamento",
                path: "/retidas/carga",
                permission: 9,
                icon: "ArrowDownUp",
            },
        ],
    },
]