const connection = uri => Object.freeze({
    connect: () => console.log(`Database is connected ot ${uri}`),
    disconnect: () => console.log('Disconnected')
})


const newConnection = connection('mongoDB://')
export default newConnection