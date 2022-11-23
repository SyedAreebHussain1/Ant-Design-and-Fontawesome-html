import React from "react"
import { Collapse } from 'antd';
import { Button, Space } from 'antd';
import "../../App.css"

const { Panel } = Collapse;
const item = [
    {
        collapseContent: "Collapse Content",
        text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.`,
        header: 'Nunc condimentum suscipit eros nec porta.'
    },
    {
        collapseContent: "Collapse Content",
        text: `Condimentum suscipit eros Dog is a type of domesticated animal.Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.`,
        header: 'Mauris at dapibus justo.'
    },
    {
        collapseContent: "Collapse Content",
        text: `Dog is a type of domesticated animal.Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.`,
        header: 'The coding mindset encourages students.'
    },
    {
        collapseContent: "Collapse Content",
        text: `Welcome guest in many households across the world. Dog is a type of domesticated animal.Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.`,
        header: 'American & British English.'
    },
    {
        collapseContent: "Collapse Content",
        text: `Domesticated animal.Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.`,
        header: 'Ut ac purus orci. Ut aliquet volutpat fermentum.'
    }
]
const AppFaq = () => {
    const onChange = (key) => {
        // console.log(key);
    }
    return (
        <div id="faq" className="block faqBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Frequently Asked Questions</h2>
                    <p>it can be found as a welcome guest in many households across the world.</p>
                </div>
                {
                    item.map((itemv, i) => {
                        return (
                            <Collapse key={i} defaultActiveKey={['1']} onChange={onChange}>
                                <Panel
                                    header={`${itemv.header} ${i + 1}`}
                                    key={i + 1}
                                >
                                    {/* <p>{`${itemv.collapseContent} ${i + 1}`}</p> */}
                                    <p>{itemv.text}</p>
                                </Panel>
                            </Collapse>

                        )
                    })
                }
                <div className="quickSupport">
                    <h3>Want quick supoort?</h3>
                    <p>Nunc condimentum suscipit eros nec porta. Suspendisse viverra molestie libero, at consequat urna malesuada euismod. Sed dignissim, sem eu fermentum luctus, nulla felis scelerisque diam, sed viverra lectus justo id nibh. Quisque ac justo vel lacus malesuada efficitur. Integer efficitur mollis arcu a blandit.</p>
                    <Button type="primary" size="large"><i className="fa fa-envelope"></i>&nbsp;Email your question</Button>
                </div>
            </div>
        </div>
    )
}
export default AppFaq