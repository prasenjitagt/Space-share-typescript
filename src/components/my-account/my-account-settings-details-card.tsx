import React from 'react'
import Image from 'next/image';

interface PropType {
    utilityIconAlt: string,
    utilityIconName: string,
    settingName: string,

}

const MyAccountSettingsDetailsCard: React.FC<PropType> = (props: PropType) => {

    const { settingName, utilityIconAlt, utilityIconName } = props;
    return (
        <>
            <button className='flex w-full justify-between items-center py-[12px] '>


                <div className=' flex items-center gap-[14px]'>

                    <Image alt={`${utilityIconAlt}`} src={`/icons/${utilityIconName}`} width={25} height={25} />
                    <p>{settingName}</p>

                </div>
                <Image alt="rightArrow" src="/icons/rightArrow.svg" width={20} height={20} />




            </button>
        </>
    )
}

export default MyAccountSettingsDetailsCard;