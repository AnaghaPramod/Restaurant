import React from 'react'
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

function Restreview({review}) {
    console.log(review);
    const [open,setOpen] = useState(false)
  return (
    <div >
        <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        View comments
      </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{ width: '400px' }}>
              {
                review.map(item=>(
                    <div>
                        <h5>{item.name}</h5>
                        <p>{item.rating}</p>
                        <p>{item.comments}</p>
                    </div>
                ))
              }
            </Card>
          </div>
        </Collapse>
      </div>
    </div>
  )
}

export default Restreview