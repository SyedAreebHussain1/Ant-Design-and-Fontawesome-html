import React from "react";
import { Row, Col } from "antd";
import { Card } from 'antd';

const { Meta } = Card;

const AppFeature = () => {
    return (
        <div id="feature" className="block featureBlock bgGray">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Key Feature and Benefits</h2>
                    <p>On the other hand, we denounce with righteous</p>
                </div>
                <Row gutter={[16, 16]}>
                    <Col
                        xs={{ span: 24 }}
                        sm={{ span: 12 }}
                        md={{ span: 8 }}
                    >
                        <Card
                            hoverable
                            style={{
                                width: 240,
                            }}
                            cover={<img alt="Modern Design" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwdmEDejfhD8lUAY5BJnI9NmaJv3aEa12oGMROEFysHwqL4JU-Q7mpYf97cwnr-gI5YTI&usqp=CAU" />}
                        >
                            <Meta title="Modern Design" description="" />
                        </Card>
                    </Col>
                    <Col xs={{ span: 24 }}
                        sm={{ span: 12 }}
                        md={{ span: 8 }}>
                        <Card
                            hoverable
                            style={{
                                width: 240,
                            }}
                            cover={<img alt="Modern Design" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwdmEDejfhD8lUAY5BJnI9NmaJv3aEa12oGMROEFysHwqL4JU-Q7mpYf97cwnr-gI5YTI&usqp=CAU" />}
                        >
                            <Meta title="Modern Design" description="" />
                        </Card>
                    </Col>
                    <Col xs={{ span: 24 }}
                        sm={{ span: 12 }}
                        md={{ span: 8 }}>
                        <Card
                            hoverable
                            style={{
                                width: 240,
                            }}
                            cover={<img alt="Modern Design" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwdmEDejfhD8lUAY5BJnI9NmaJv3aEa12oGMROEFysHwqL4JU-Q7mpYf97cwnr-gI5YTI&usqp=CAU" />}
                        >
                            <Meta title="Modern Design" description="" />
                        </Card>
                    </Col>
                    <Col xs={{ span: 24 }}
                        sm={{ span: 12 }}
                        md={{ span: 8 }}>
                        <Card
                            hoverable
                            style={{
                                width: 240,
                            }}
                            cover={<img alt="Modern Design" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwdmEDejfhD8lUAY5BJnI9NmaJv3aEa12oGMROEFysHwqL4JU-Q7mpYf97cwnr-gI5YTI&usqp=CAU" />}
                        >
                            <Meta title="Modern Design" description="" />
                        </Card>
                    </Col>
                    <Col xs={{ span: 24 }}
                        sm={{ span: 12 }}
                        md={{ span: 8 }}>
                        <Card
                            hoverable
                            style={{
                                width: 240,
                            }}
                            cover={<img alt="Modern Design" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwdmEDejfhD8lUAY5BJnI9NmaJv3aEa12oGMROEFysHwqL4JU-Q7mpYf97cwnr-gI5YTI&usqp=CAU" />}
                        >
                            <Meta title="Modern Design" description="" />
                        </Card>
                    </Col>
                    <Col xs={{ span: 24 }}
                        sm={{ span: 12 }}
                        md={{ span: 8 }}>
                        <Card
                            hoverable
                            style={{
                                width: 240,
                            }}
                            cover={<img alt="Modern Design" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwdmEDejfhD8lUAY5BJnI9NmaJv3aEa12oGMROEFysHwqL4JU-Q7mpYf97cwnr-gI5YTI&usqp=CAU" />}
                        >
                            <Meta title="Modern Design" description="" />
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default AppFeature 