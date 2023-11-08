<template>
    <div class="surface-0 flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
        <div class="grid justify-content-center p-2 lg:p-0" style="min-width:80%">
            <div class="col-12 mt-5 xl:mt-0 text-center">
                <img src="images/pint/banner.png" alt="PINT logo" class="mb-5" style="width:30%; height:60%;">
            </div>
            <div class="col-12 xl:col-6" style="border-radius:56px; padding:0.3rem; background: linear-gradient(180deg, var(--primary-color), rgba(33, 150, 243, 0) 30%);">
                <div class="h-full w-full m-0 py-7 px-4" style="border-radius:53px; background: linear-gradient(180deg, var(--surface-50) 38.9%, var(--surface-0));">
                    <div class="grid flex flex-column align-items-center">
                        <!--<div class="flex justify-content-center align-items-center bg-orange-500 border-circle" style="width:3.2rem; height:3.2rem;">
                            <i class="pi pi-fw pi-lock text-2xl text-50"></i>
                        </div>-->
                        <div class="text-900 text-3xl font-medium mb-3">Access Denied</div>
                        <span class="text-900 font-medium">Please, retry to login</span>
                        <img src="layout/images/asset-access.svg" alt="Access denied" class="mt-5" width="80%">
                        <div class="col-12 mt-5 text-center">
                            <i class="pi pi-fw pi-arrow-left text-blue-500 mr-2" style="vertical-align:center;"></i>
                            <router-link to="/login" class="text-blue-500">Go to Login Page</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>