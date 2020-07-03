USE my_db;

CREATE TABLE if not exists blogs(
  id int AUTO_INCREMENT,
  username varchar(30),
  title varchar(30),
  content text,
  created datetime,
  primary key (id)
);

CREATE TABLE if not exists users(
  userid int AUTO_INCREMENT,
  firstname varchar(30),
  lastname varchar(30),
  username varchar(30),
  email varchar(30),
  primary key (userid),
  unique(username)
);

-- insert into users(firstname, lastname, username, email) values ('carlitos', 'willis', 'carlitoswillis', 'carlitoswillis@berkeley.edu');

insert into blogs(username, content, created, title) values('carlitoswillis', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean sed adipiscing diam donec adipiscing tristique risus. Nulla aliquet porttitor lacus luctus accumsan tortor. Elit duis tristique sollicitudin nibh sit. Nunc eget lorem dolor sed viverra ipsum nunc aliquet. Sed vulputate odio ut enim blandit. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Et netus et malesuada fames ac turpis. Orci phasellus egestas tellus rutrum tellus pellentesque eu. Quisque sagittis purus sit amet volutpat. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel. Viverra orci sagittis eu volutpat odio facilisis mauris. Eget lorem dolor sed viverra ipsum nunc aliquet. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Quisque non tellus orci ac.

Tristique sollicitudin nibh sit amet. Vel risus commodo viverra maecenas accumsan lacus vel facilisis. Sed faucibus turpis in eu. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius. Laoreet non curabitur gravida arcu ac tortor dignissim convallis. Arcu felis bibendum ut tristique et egestas. Sit amet nulla facilisi morbi. Odio ut sem nulla pharetra diam sit. Urna duis convallis convallis tellus. Quis commodo odio aenean sed adipiscing. Amet purus gravida quis blandit turpis cursus. Scelerisque felis imperdiet proin fermentum leo vel orci porta. Dapibus ultrices in iaculis nunc sed.', NOW(), 'Title of Ipsum');

insert into blogs(username, content, created, title) values('carlitoswillis', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean sed adipiscing diam donec adipiscing tristique risus. Nulla aliquet porttitor lacus luctus accumsan tortor. Elit duis tristique sollicitudin nibh sit. Nunc eget lorem dolor sed viverra ipsum nunc aliquet. Sed vulputate odio ut enim blandit. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Et netus et malesuada fames ac turpis. Orci phasellus egestas tellus rutrum tellus pellentesque eu. Quisque sagittis purus sit amet volutpat. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel. Viverra orci sagittis eu volutpat odio facilisis mauris. Eget lorem dolor sed viverra ipsum nunc aliquet. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Quisque non tellus orci ac.

Tristique sollicitudin nibh sit amet. Vel risus commodo viverra maecenas accumsan lacus vel facilisis. Sed faucibus turpis in eu. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius. Laoreet non curabitur gravida arcu ac tortor dignissim convallis. Arcu felis bibendum ut tristique et egestas. Sit amet nulla facilisi morbi. Odio ut sem nulla pharetra diam sit. Urna duis convallis convallis tellus. Quis commodo odio aenean sed adipiscing. Amet purus gravida quis blandit turpis cursus. Scelerisque felis imperdiet proin fermentum leo vel orci porta. Dapibus ultrices in iaculis nunc sed.', NOW(), 'Second Title I Suppose');