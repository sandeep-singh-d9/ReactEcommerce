import React from 'react'

export default function Title({name, title}) {
    return (
        <div className="row mx-0">
            <div className="col-sm-10 mx-auto my-2 text-title">
                <h1 className="text-capitalize font-weight-bold">{name} <strong className="text-blue">{title}</strong></h1>
            </div>
        </div>
    )
}
