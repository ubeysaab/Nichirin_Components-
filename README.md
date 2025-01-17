// is just function that descript how to render the component

import { components } from "storybook/internal/components";
import Button from "./Button";


export default {
  title:'hi mom',
  component:Button
}

// here we export a function foreach variation of the button 
// export const Primary = ()=><Button>hello MOm</Button>
// export const Danger = ()=><Button variation={"warning"}>hello MOm</Button>
// here : we can do it right in the UI by actually change the arguments to a component directly there  by creating template that maps argument to the component 


const Template = (args)=><Button> </Button>
export const Primary = Template.bind({})

Primary.args={
  variation:"warning",
  size:"lg"
}

// we can now change the componetns behavior on the fly directly in the sotry book ui



// ! its also possible to write stories in markdown use mdx which us not only visualize the component  but also document it at the same time. and there a huge collection of add-on to customize the behavior of story book

// we might use action to keep track of browser events or viewport to analyze components on responsive layout and the measure add-on can help you visually  debug css  layout and alignemnt issues withing your stories 

// we can use test-storybook to write automated tasks and run them on our ci server 

// and we can share the work as static web application 