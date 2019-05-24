const express = require( 'express' );



const PORT = process.env.PORT || 3000;

express().use( ( request, response ) =>
{
    response.json({
        url: request.url,
        query: request.query,
        timestamp: Date.now(),
        protocol: request.protocol,
    });
}).listen( PORT );
