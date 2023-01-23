drop table if exists storyline;

create table storyline (
    id bigint generated always as identity primary key,
    page_number bigint not null,
    story varchar not null,
    photo varchar not null
);

insert into storyline (page_number, story, photo) values
(1, 'yyjyfnd', 'cxriixryixry0');