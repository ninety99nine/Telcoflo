<template>

    <div>

        <!-- Dropdown Menu -->
        <DefaultDropdown placement="bottom-end" dropdownClasses="w-60 border-x-0 border-b-0 border-t-2 border-blue-400">

            <template #trigger>

                <div class="overflow-hidden relative w-8 h-8 bg-blue-500 rounded-full cursor-pointer border border-gray-200">
                    <svg class="absolute w-10 h-10 text-white" :style="{ 'left': '-5px' }" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                    </svg>
                </div>

            </template>

            <template #prependMenus>

                <!-- Name & Email -->
                <li>
                    <span class="block px-4 py-4 border-b">
                        <p>{{ $page.props.auth.user.name }}</p>
                        <p class="text-xs text-gray-400">{{ $page.props.auth.user.email }}</p>
                    </span>
                </li>

                <!-- Settings -->
                <li @click="navigateToSettings()">
                    <span class="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer border-b" @click="settings">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>Settings</span>
                    </span>
                </li>

                <!-- Sign Out -->
                <li>
                    <span class="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer" @click="logout">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        <span>Sign Out</span>
                    </span>
                </li>

                <!-- Loading overlay -->
                <LoaderOverlay :show="logoutForm.processing" />

            </template>

        </DefaultDropdown>

    </div>

</template>

<script>

    import { useForm } from '@inertiajs/vue3';
    import LoaderOverlay from "@components/Loader/LoaderOverlay";
    import DefaultDropdown from '@components/Dropdown/DefaultDropdown';

    export default {
        components: { LoaderOverlay, DefaultDropdown },
        data() {
            return {
                logoutForm: useForm({})
            }
        },
        methods: {
            navigateToSettings() {
                this.$inertia.get(route('settings.account'));
            },
            logout() {

                const self = this;

                //  Attempt to logout
                this.logoutForm.post(route('logout'), {
                    replace: true,
                    onSuccess: () => {
                        self.$message({
                            message: 'Logged Out',
                            type: 'success'
                        });
                    },
                    onError: (errors) => {
                        self.$message({
                            message: 'Sorry, we found some mistakes',
                            type: 'error'
                        });
                    },
                });

            }
        }
    };

</script>
