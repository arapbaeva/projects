

import React from "react";

function Accordion() {
    console.log('Accordion rendering')
    return <div>
        <AccordionTitle title={"Develop with IT-INCUBATOR"}/>
        <AccordionBody title={"I'm a programmer"}/>
    </div>
}

function AccordionTitle(props: any) {
    console.log('AccordionTitle rendering')
    return (
        <h3>Menu</h3>
    );
}

function AccordionBody(props: any) {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>React</li>
        </ul>
    );
}
export default  Accordion;
