
const pool = require('../../pool/pool');

module.exports = class Story {
    id;
    page_number;
    story;
    photo;

    constructor(row){
        this.id = row.id;
        this.page_number = row.page_number;
        this.story = row.story;
        this.photo = row.photo;
    }


    static async getStoryById(id){
        const { rows } = await pool.query(
        `
        SELECT * FROM storyline WHERE id = $1;
        `, [id]
        ); 
        return rows.map((row) => new Story(row));
    }
}
