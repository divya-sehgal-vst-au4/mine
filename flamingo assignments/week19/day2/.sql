postgres=# CREATE DATABASE songapp;
CREATE DATABASE
postgres=# \l
                                         List of databases
   Name    |  Owner   | Encoding |      Collate       |       Ctype        |   Access privileges
-----------+----------+----------+--------------------+--------------------+-----------------------
 postgres  | postgres | UTF8     | English_India.1252 | English_India.1252 |
 songapp   | postgres | UTF8     | English_India.1252 | English_India.1252 |
 template0 | postgres | UTF8     | English_India.1252 | English_India.1252 | =c/postgres          +
           |          |          |                    |                    | postgres=CTc/postgres
 template1 | postgres | UTF8     | English_India.1252 | English_India.1252 | =c/postgres          +
           |          |          |                    |                    | postgres=CTc/postgres
(4 rows)


postgres=# \c songapp
You are now connected to database "songapp" as user "postgres".
songapp=# CREATE TABLE GENRE(NAME TEXT,ID INT PRIMARY KEY);
CREATE TABLE
songapp-# \d
         List of relations
 Schema | Name  | Type  |  Owner
--------+-------+-------+----------
 public | genre | table | postgres
(1 row)


songapp-# \d genre
               Table "public.genre"
 Column |  Type   | Collation | Nullable | Default
--------+---------+-----------+----------+---------
 name   | text    |           |          |
 id     | integer |           | not null |
Indexes:
    "genre_pkey" PRIMARY KEY, btree (id)


songapp=# CREATE TABLE AWARD(NAME TEXT,CATEGORY TEXT,ID INT PRIMARY KEY);
CREATE TABLE
songapp=# CREATE TABLE SONGS(NAME TEXT,LENGTH TEXT,YEAR INT,MOVIE TEXT,GENRE INT REFERENCES GENRE(ID),SINGER TEXT,LANGUAGE TEXT,AWARD INT REFERENCES AWARD(ID),ID INT PRIMARY KEY);
CREATE TABLE
songapp=# CREATE TABLE MOVIE(NAME TEXT,SONG INT REFERENCES SONGS(ID),ID INT PRIMARY KEY);
CREATE TABLE                                                             ^
songapp=# CREATE TABLE SINGER(NAME TEXT,AGE INT,SONGS INT REFERENCES SONGS(ID),AWARD INT REFERENCES AWARD(ID),EXPERIENCE INT, CLASSICALLYTRAINED BOOL,GENDER TEXT,NATIVELANGUAGE TEXT,ID INT PRIMARY KEY);
CREATE TABLE
songapp=# \d
         List of relations
 Schema |  Name  | Type  |  Owner
--------+--------+-------+----------
 public | award  | table | postgres
 public | genre  | table | postgres
 public | movie  | table | postgres
 public | singer | table | postgres
 public | songs  | table | postgres
(5 rows)
songapp=# \d
         List of relations
 Schema |  Name  | Type  |  Owner
--------+--------+-------+----------
 public | award  | table | postgres
 public | genre  | table | postgres
 public | movie  | table | postgres
 public | singer | table | postgres
 public | songs  | table | postgres
(5 rows)
songapp=# \d singer
                     Table "public.singer"
       Column       |  Type   | Collation | Nullable | Default
--------------------+---------+-----------+----------+---------
 name               | text    |           |          |
 age                | integer |           |          |
 songs              | integer |           |          |
 award              | integer |           |          |
 experience         | integer |           |          |
 classicallytrained | boolean |           |          |
 gender             | text    |           |          |
 nativelanguage     | text    |           |          |
 id                 | integer |           | not null |
Indexes:
    "singer_pkey" PRIMARY KEY, btree (id)
Foreign-key constraints:
    "singer_award_fkey" FOREIGN KEY (award) REFERENCES award(id)
    "singer_songs_fkey" FOREIGN KEY (songs) REFERENCES songs(id)


songapp=# \d songs
                Table "public.songs"
  Column  |  Type   | Collation | Nullable | Default
----------+---------+-----------+----------+---------
 name     | text    |           |          |
 length   | text    |           |          |
 year     | integer |           |          |
 movie    | text    |           |          |
 genre    | integer |           |          |
 singer   | text    |           |          |
 language | text    |           |          |
 award    | integer |           |          |
 id       | integer |           | not null |
Indexes:
    "songs_pkey" PRIMARY KEY, btree (id)
Foreign-key constraints:
    "songs_award_fkey" FOREIGN KEY (award) REFERENCES award(id)
    "songs_genre_fkey" FOREIGN KEY (genre) REFERENCES genre(id)
Referenced by:
    TABLE "movie" CONSTRAINT "movie_song_fkey" FOREIGN KEY (song) REFERENCES songs(id)
    TABLE "singer" CONSTRAINT "singer_songs_fkey" FOREIGN KEY (songs) REFERENCES songs(id)


                                                   ^
songapp=# ALTER TABLE SONGS DROP COLUMN SINGER;
ALTER TABLE
songapp=# \d songs
                        Table "public.songs"
  Column  |          Type          | Collation | Nullable | Default
----------+------------------------+-----------+----------+---------
 name     | text                   |           |          |
 length   | character varying(500) |           |          |
 year     | integer                |           |          |
 movie    | text                   |           |          |
 genre    | integer                |           |          |
 language | text                   |           |          |
 award    | integer                |           |          |
 id       | integer                |           | not null |
Indexes:
    "songs_pkey" PRIMARY KEY, btree (id)
Foreign-key constraints:
    "songs_award_fkey" FOREIGN KEY (award) REFERENCES award(id)
    "songs_genre_fkey" FOREIGN KEY (genre) REFERENCES genre(id)
Referenced by:
    TABLE "movie" CONSTRAINT "movie_song_fkey" FOREIGN KEY (song) REFERENCES songs(id)
    TABLE "singer" CONSTRAINT "singer_songs_fkey" FOREIGN KEY (songs) REFERENCES songs(id)


songapp=# ALTER TABLE SONGS DROP COLUMN MOVIE;
ALTER TABLE
songapp=# ALTER TABLE SONGS DROP COLUMN LENGTH;
ALTER TABLE
songapp=# ALTER TABLE SONGS ADD SINGER INT REFERENCES SINGER(ID)
songapp-# \d songs
                Table "public.songs"
  Column  |  Type   | Collation | Nullable | Default
----------+---------+-----------+----------+---------
 name     | text    |           |          |
 year     | integer |           |          |
 genre    | integer |           |          |
 language | text    |           |          |
 award    | integer |           |          |
 id       | integer |           | not null |
Indexes:
    "songs_pkey" PRIMARY KEY, btree (id)
Foreign-key constraints:
    "songs_award_fkey" FOREIGN KEY (award) REFERENCES award(id)
    "songs_genre_fkey" FOREIGN KEY (genre) REFERENCES genre(id)
Referenced by:
    TABLE "movie" CONSTRAINT "movie_song_fkey" FOREIGN KEY (song) REFERENCES songs(id)
    TABLE "singer" CONSTRAINT "singer_songs_fkey" FOREIGN KEY (songs) REFERENCES songs(id)

songapp=# ;
songapp=# ALTER TABLE SONGS ADD SINGER INT REFERENCES SINGER(ID);
ALTER TABLE
songapp=# \d songs
                Table "public.songs"
  Column  |  Type   | Collation | Nullable | Default
----------+---------+-----------+----------+---------
 name     | text    |           |          |
 year     | integer |           |          |
 genre    | integer |           |          |
 language | text    |           |          |
 award    | integer |           |          |
 id       | integer |           | not null |
 singer   | integer |           |          |
Indexes:
    "songs_pkey" PRIMARY KEY, btree (id)
Foreign-key constraints:
    "songs_award_fkey" FOREIGN KEY (award) REFERENCES award(id)
    "songs_genre_fkey" FOREIGN KEY (genre) REFERENCES genre(id)
    "songs_singer_fkey" FOREIGN KEY (singer) REFERENCES singer(id)
Referenced by:
    TABLE "movie" CONSTRAINT "movie_song_fkey" FOREIGN KEY (song) REFERENCES songs(id)
    TABLE "singer" CONSTRAINT "singer_songs_fkey" FOREIGN KEY (songs) REFERENCES songs(id)


songapp=# ALTER TABLE SONGS ADD MOVIE INT REFERENCES MOVIE(ID);
ALTER TABLE
songapp=# ALTER TABLE SONGS ADD LENGTH INT;
ALTER TABLE
songapp=# \d songs
                Table "public.songs"
  Column  |  Type   | Collation | Nullable | Default
----------+---------+-----------+----------+---------
 name     | text    |           |          |
 year     | integer |           |          |
 genre    | integer |           |          |
 language | text    |           |          |
 award    | integer |           |          |
 id       | integer |           | not null |
 singer   | integer |           |          |
 movie    | integer |           |          |
 length   | integer |           |          |
Indexes:
    "songs_pkey" PRIMARY KEY, btree (id)
Foreign-key constraints:
    "songs_award_fkey" FOREIGN KEY (award) REFERENCES award(id)
    "songs_genre_fkey" FOREIGN KEY (genre) REFERENCES genre(id)
    "songs_movie_fkey" FOREIGN KEY (movie) REFERENCES movie(id)
    "songs_singer_fkey" FOREIGN KEY (singer) REFERENCES singer(id)
Referenced by:
    TABLE "movie" CONSTRAINT "movie_song_fkey" FOREIGN KEY (song) REFERENCES songs(id)
    TABLE "singer" CONSTRAINT "singer_songs_fkey" FOREIGN KEY (songs) REFERENCES songs(id)
