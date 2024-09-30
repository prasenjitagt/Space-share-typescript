import React from 'react'
import Image from 'next/image';
import MyAccountSettingsDetailsCard from './my-account-settings-details-card';
import DividerLine from '../small-components/divider-line';

const MyAccountSettings: React.FC = () => {
    return (
        <>
            <div className='mx-[24px]'>

                {/* Header Section */}
                <header className='mb-[3px]'>
                    <p className='inter-medium '>Account Settings</p>
                </header>


                {/* Account setting details */}
                <section>

                    <MyAccountSettingsDetailsCard
                        settingName='Personal Information'
                        utilityIconAlt='user'
                        utilityIconName='user-profile.svg'

                    />

                    <DividerLine />

                    <MyAccountSettingsDetailsCard
                        settingName='Payments and Payouts'
                        utilityIconAlt='payments'
                        utilityIconName='Money.svg'

                    />

                    <DividerLine />

                    <MyAccountSettingsDetailsCard
                        settingName='Translation'
                        utilityIconAlt='translation'
                        utilityIconName='Translate.svg'

                    />

                    <DividerLine />

                    <MyAccountSettingsDetailsCard
                        settingName='Notifications'
                        utilityIconAlt='notifications'
                        utilityIconName='Bell.svg'

                    />

                    <DividerLine />

                    <MyAccountSettingsDetailsCard
                        settingName='Privacy and sharing'
                        utilityIconAlt='privacy'
                        utilityIconName='Lock.svg'

                    />

                    <DividerLine />

                    <MyAccountSettingsDetailsCard
                        settingName='Travel for work'
                        utilityIconAlt='travel'
                        utilityIconName='Briefcase.svg'

                    />






                </section>




            </div>
        </>
    )
}

export default MyAccountSettings;