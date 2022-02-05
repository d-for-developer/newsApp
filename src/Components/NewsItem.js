import React from 'react';
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import { Component } from 'react/cjs/react.development';


export default class NewsItem extends Component {
    render() {
        let { title, description, imgUrl, newsUrl, author, date, source } = this.props;

        return (
            <>
                <div className='my-3'>
                    <Card>
                        <CardImage
                            src={imgUrl}
                            alt="Card Image"
                        />

                        <CardBody>
                        <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-blue-100 bg-blue-600 rounded-full">{source}</span>

                            <H6 color="gray">
                                {title}...
                            </H6>
                            
                            <Paragraph color="gray">
                                {description}...
                            </Paragraph>
                            <span className='text-blue-600 text-sm'>by {author} <br/>on {new Date(date).toGMTString()}</span>
                        </CardBody>

                       
                        <CardFooter>
                            {/* <Button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={newsUrl} color="lightBlue" size="lg" ripple="dark">
                                Read More
                            </Button> */}
                            <a rel="noreferrer" href={newsUrl} target={'_blank'} className="bg-transparent border border-black text-black hover:bg-black hover:text-white text-center py-2 px-4 rounded">
                                Read More
                            </a>
                        </CardFooter>
                    </Card>
                </div>
            </>
        )
    }

}
