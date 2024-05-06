import React from 'react'
import Card from './Card'
export default function Cards() {
  return (
    <div className='container d-flex justify-content-center mt-4'>
        <div className='row'>
            <div className='col-md-3 mb-4'>
                <Card/>
            </div>
            <div className='col-md-3 mb-4'>
                <Card/>
            </div>
            <div className='col-md-3 mb-3'>
                <Card/>
            </div>
            <div className='col-md-3 mb-4'>
                <Card/>
            </div>
            <div className='col-md-3 mb-4'>
                <Card/>
            </div>
            
        </div>
    </div>
  )
}
