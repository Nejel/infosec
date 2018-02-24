class Session {
    constructor(data) {
        this.time = data._time;
        this.src_user = data.src_user;
        this.src_ip = data.src_ip;
        this.src_port = data.src_port;
        this.dest_ip = (data.dest_ip || '');
        this.dest_port = data.dest_port;
        this.input_byte = data.input_byte;
        this.output_byte = data.output_byte;
    }
}

export default Session;
