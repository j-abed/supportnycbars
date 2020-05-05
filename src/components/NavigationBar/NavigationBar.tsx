import React from "react"
import NavigationItem from "./NavigationItem"

interface Props { }

const navigationItems = [
  {
    title: "Home",
    link: "/"
  },
  {
    title: "Bracket",
    link: "/bracket"
  }
]

const NavigationBar: React.FunctionComponent<Props> = (): React.ReactElement => {
  return (
    <>
      {navigationItems.map((item) => <NavigationItem title={item.title} link={item.link} />)}
    </>
  )
};

export default NavigationBar;