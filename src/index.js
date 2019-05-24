const express = require( 'express' );
const debug = require( 'debug' );



const NS = 'cloud-run-102:src/index:debug';
const PORT = process.env.PORT || 3000;

express().use( ( request, response ) =>
{
    const body = {
        url: request.url,
        query: request.query,
        timestamp: Date.now(),
        protocol: request.protocol,
    };

    debug( NS )( body );
    response.json( body );
}).listen( PORT, () =>
{
    debug( NS )( `Started on port :${ PORT }` );
});
