CREATE TABLE Singers(
id int PRIMARY KEY,
 Singer_Name VARCHAR(100),
Song_Name VARCHAR(100),
Song_year VARCHAR(100)
);


insert into Singers (id,  Singer_Name, Song_Name, Song_year) values (1, 'Odetta Marcome', 'Commelina caroliniana Walter', 2002);
insert into Singers (id,  Singer_Name, Song_Name, Song_year) values (2, 'Lea Rickardsson', 'Scaevola chamissoniana Gaudich.', 1998);
insert into Singers (id,  Singer_Name, Song_Name, Song_year) values (3, 'Paul Renzini', 'Nemophila heterophylla Fisch. & C.A. Mey.', 2004);
insert into Singers (id,  Singer_Name, Song_Name, Song_year) values (4, 'Reginald Habergham', 'Leucolepis acanthoneuron (Schwägr.) Lindb.', 2002);
insert into Singers (id,  Singer_Name, Song_Name, Song_year) values (5, 'Earlie Pritty', 'Cordylanthus nevinii A. Gray', 2003);
insert into Singers (id,  Singer_Name, Song_Name, Song_year) values (6, 'Rebbecca MacCurtain', 'Echinops exaltatus Schrad.', 1998);
insert into Singers (id,  Singer_Name, Song_Name, Song_year) values (7, 'Belia McCurtin', 'Gaura neomexicana Wooton', 2008);
insert into Singers (id,  Singer_Name, Song_Name, Song_year) values (8, 'Darcee Fontaine', 'Stenotus armerioides Nutt. var. armerioides', 1997);
insert into Singers (id,  Singer_Name, Song_Name, Song_year) values (9, 'Ariadne Muselli', 'Calochortus palmeri S. Watson', 1992);
insert into Singers (id,  Singer_Name, Song_Name, Song_year) values (10, 'Zebedee Conwell', 'Phellodendron japonicum Maxim.', 2008);



CREATE TABLE Songs(
id int PRIMARY KEY,
 Song_name VARCHAR(100),
Song_length VARCHAR(100)
);

insert into Songs (id,  Song_name, Song_length) values (1, 'Dudleya traskiae (Rose) Moran', 5.21);
insert into Songs (id,  Song_name, Song_length) values (2, 'Salsola kali L. ssp. pontica (Pall.) Mosyakin', 4.07);
insert into Songs (id,  Song_name, Song_length) values (3, 'Penstemon caespitosus Nutt. ex A. Gray', 3.67);
insert into Songs (id,  Song_name, Song_length) values (4, 'Chrysopsis mariana (L.) Elliott', 1.64);
insert into Songs (id,  Song_name, Song_length) values (5, 'Commelina caroliniana Walter', 1.94);
insert into Songs (id,  Song_name, Song_length) values (6, 'Phleum alpinum L.', 1.91);
insert into Songs (id,  Song_name, Song_length) values (7, 'Astragalus pterocarpus S. Watson', 4.3);
insert into Songs (id,  Song_name, Song_length) values (8, 'Caulophyllum giganteum (Farw.) Loconte & Blackwell', 2.75);
insert into Songs (id,  Song_name, Song_length) values (9, 'Calochortus palmeri S. Watson', 3.28);
insert into Songs (id,  Song_name, Song_length) values (10, 'Phellodendron japonicum Maxim.', 2.11);



--1. All singers from the singers table who have an entry in the songs table (common data between both tables)

select singer_name from Singers
join Songs
on Singers.song_name = Songs.Song_Name

--2. Get all entries from singers table, and common entries from songs

select * from Singers
left join Songs
on Singers.song_name = Songs.Song_Name

--3. Get all entries from songs table, and common entries from singers

select * from Singers
right join Songs
on Singers.song_name = Songs.Song_Name

--4. Get all the entries from both the tables

select * from Songs
full join SIngers
on Singers.song_name = Songs.Song_Name

--5. Get all the entries from the singers table which are not present in the songs (rows exclusive to singers table)

select * from Singers
left join Songs
on Singers.song_name = Songs.Song_Name
where songs.id is null;


--6. Get all the entries from the songs table which are not present in the singers (rows exclusive to songs table)
select * from Singers
right join Songs
on Singers.song_name = Songs.Song_Name
where singers.id is null;

--7. Get all the unique entries from both the tables (uncommon data)

select * from Singers
join Songs
on Singers.song_name = Songs.Song_Name
