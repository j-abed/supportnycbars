import React from "react"

interface Props {
  title: string;
  link: string;
}

const NavigationItem: React.FunctionComponent<Props> = ({title, link}: Props): React.ReactElement => {
  return (
    <a href={link}>{title}</a>
  )
}

export default NavigationItem