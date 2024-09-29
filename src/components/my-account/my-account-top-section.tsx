import React  from 'react'


interface PropType{
    userId:string
}

const MyAccountTopSection:React.FC<PropType> = ({userId}:PropType)   => {
  return (
    <div>MyAccountTopSection</div>
  )
}

export default MyAccountTopSection;