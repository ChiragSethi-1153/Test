import { Button, Card, CardContent, Stack, Typography } from '@mui/material'
import React from 'react'

const BookCard = ({item}) => {
  
  console.log(item?.coverImage?.map((i) => i))
  return (
   <Card sx={{ height: 'fit-content', width: "200px", padding: '10px 10px', boxSizing: 'border-box'}}>
      <CardContent sx={{display: "flex", flexDirection: "column", width: '100%', alignItems: 'center', justifyContent: 'space-around', padding: '0'}}>
          {
            item?.coverImage?.map((i) => (
              <img src={`${process.env.REACT_APP_SERVER}/${i}`} alt="" style={{width: '170px'}}/>
            ))
            }
          <Stack alignItems={'flex-start'} sx={{width: '100%', paddingLeft: '10px'}}>
            <Typography>{item.title}</Typography>
            <Typography>{item.author}</Typography>
          </Stack>
          <Button variant='contained' sx={{marginTop: '10px'}}>Borrow</Button>
      </CardContent>
   </Card>
  )
}

export default BookCard
