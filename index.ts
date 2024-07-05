import * as pulumi from "@pulumi/pulumi";
import * as proxmox from '@muhlba91/pulumi-proxmoxve';

const provider = new proxmox.Provider('proxmoxve', {
    endpoint: process.env.PROXMOX_VE_ENDPOINT,
    apiToken: process.env.PROXMOX_VE_API_TOKEN,
    username: process.env.PROXMOX_VE_USERNAME,
});

const args = {};
/* const vm = new proxmox.vm.VirtualMachine(
    'vm',
    args,
    {
        provider: provider,
    },
); */

const debian = new proxmox.ct.Container('debian', {
    nodeName: 'pve',
    description: 'Debian 12',
    vmId: 101,
    operatingSystem: {
        templateFileId: "local:debian-12-standard_12.2-1_amd64.tar.zst",
        type: "debian",
    },
    disk: {
        datastoreId: "zfs_pool_1",
        size: 16,
    },
    startOnBoot: true,
    cpu: {
        architecture: "amd64",
        cores: 1,
        units: 500,
    },
    memory: {
        dedicated: 256,
        swap: 0,
    },
    tags: ["debian", "12"],

})


export const debianId = debian.id
