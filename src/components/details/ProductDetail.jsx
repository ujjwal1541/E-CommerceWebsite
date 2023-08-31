
import { Typography,Box, Table, TableBody, TableRow, TableCell, styled } from "@mui/material";
import {LocalOffer as Badge} from '@mui/icons-material';

const SmallText =styled(Box)`
font-size: 14px;
vertical-align: baseline;
& >p{
    font-size: 14px;
    margin-top: 10px;
}`;

const StyleBadge = styled(Badge)`
margin-right: 10px;
color: #00cc00;
font-size: 16px;
`;

const ColumnText = styled(TableRow)`
font-size:14px;
vertical-align: baseline;
& > td {
    font-size: 14px;
    margin-top: 10px;
    border-none;
}`

const ProductDetail =({product})=>{
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    const date = new Date(new Date().getTime()+(5 * 24 * 60 * 60 * 1000));
    return(
        <>
        <Typography>{product.title.longTitle}</Typography>
                        <Typography style={{marginTop: 5, color: '#878787', fontSize: 14}}>
                            8 Ratings & 1 Reviews
                            <Box component="span"><img src={fassured} style={{width: 77, marginLeft: 20}} alt="" /></Box>
                            </Typography>
                            <Typography>
                                <Box component="span" style={{ fontSize: 28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                                <Box component="span" style={{ color: '#878787'}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                                <Box component="span" style={{ color: '#388E3C'}}>{product.price.discount}off</Box>
                            </Typography>
                            <Typography>Available Offers</Typography>
                            <SmallText>
                                <Typography><StyleBadge/>Get extra ₹3000 off on 1 item(s) (price inclusive of cashback/coupon)T&C</Typography>
                                <Typography><StyleBadge/>10% Instant Discount on ICICI Bank Credit Card EMI Txns, up to ₹1,750 on orders of ₹5,000 and aboveT&C</Typography>
                                <Typography><StyleBadge/>5% Cashback on Flipkart Axis Bank CardT&C</Typography>
                                <Typography><StyleBadge/>Sign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹10,000*Know More</Typography>
                                <Typography><StyleBadge/>Purchase now & get 1 surprise cashback coupon in Future</Typography>
                                <Typography><StyleBadge/>Flat ₹3,000 off on HDFC Bank Credit Card EMI Trxns on orders priced ₹50,000 and aboveT&C</Typography>
                            </SmallText>
                            <Table>
                                <TableBody>
                                    <ColumnText>
                                        <TableCell style={{color: '#878787'}}>Delivery</TableCell>
                                        <TableCell style={{fontWeight: 600}}>Delivery by {date.toDateString()} | ₹40</TableCell>
                                    </ColumnText>
                                    <ColumnText>
                                        <TableCell style={{color: '#878787'}}>Warranty</TableCell>
                                        <TableCell >No Warranty</TableCell>
                                    </ColumnText>
                                    <ColumnText>
                                        <TableCell style={{color: '#878787'}}>Seller</TableCell>
                                        <TableCell >
                                            <Box component="span" style={{color: '#2874f0'}}>SuperComNet</Box>
                                            <Typography>GST invoice available</Typography>
                                            <Typography>View more sellers starting from ₹{product.price.cost}</Typography>
                                        </TableCell>
                                    </ColumnText>
                                    <ColumnText>
                                        <TableCell colSpan={2}>
                                            <img src={adURL} style={{width: 390}} alt="" />
                                        </TableCell>
                                    </ColumnText>
                                    <ColumnText>
                                        <TableCell style={{color: '#878787'}}>Description</TableCell>
                                        <TableCell >{product.description}</TableCell>
                                    </ColumnText>
                                </TableBody>
                            </Table>
        </>
    )
}
export default ProductDetail;