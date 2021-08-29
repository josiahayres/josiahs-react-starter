import React from 'react'

interface Props {
    children: any
}

export const Button = (props: Props) => {
    return <button>{props.children}</button>
}
