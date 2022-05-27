import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function CommonCard({coin}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={<Avatar aria-label="recipe" src={coin.icon}/>}
        title={coin.name}
        subheader={coin.symbol}
      />
      <CardMedia
        component="img"
        height="194"
        image={coin.icon}
        alt={coin.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        U$D {coin.price}  ({coin.priceChange1h} 1h)
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <List>
            <ListItem disablePadding>
            Price Change (1h): {coin.priceChange1h}        
            </ListItem>
            <ListItem disablePadding>
            Price Change (1d): {coin.priceChange1d}
            </ListItem>
            <ListItem disablePadding>
            Price Change (1w): {coin.priceChange1w}
            </ListItem>
            <ListItem disablePadding>
            Price BTC: {coin.priceBtc}
            </ListItem>
          <List>
            <ListItem disablePadding>
            Volume: {coin.volume}
            </ListItem>
            <ListItem disablePadding>
            Market Cap: {coin.marketCap}
            </ListItem>
          </List>
            <ListItem disablePadding>
            Available/Total Supply: {coin.availableSupply}/{coin.totalSupply}
            </ListItem>
          </List>
          <List>
            <ListItem disablePadding>
            Website: {coin.websiteUrl}        
            </ListItem>
            <ListItem disablePadding>
            Reddit: {coin.redditUrl}
            </ListItem>
            <ListItem disablePadding>
            Twitter: {coin.twitterUrl}
            </ListItem>
          </List>
        </Box>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default CommonCard;
/* 
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function CommonAvatar({image, name}) {

      return (
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 128,
              height: 128,
            },
          }}
        >
          <Paper elevation={24} >
            <Stack direction="row" spacing={2} >
                <Avatar alt={name} src={image} sx={{ width: 150, height: 150}}/>
            </Stack>
          </Paper>
        </Box>
  );
        }
export default CommonAvatar;  */