const moviesMock =
  [
    { "id": "b2df2ea5-f273-4c7d-afca-dba72228037c", "title": "xXx", "year": 2006, "cover": "http://dummyimage.com/102x212.jpg/cc0000/ffffff", "description": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.", "duration": 1919, "contentRating": "NC-17", "source": "http://google.com.hk/augue/luctus/tincidunt/nulla/mollis.png", "tags": ["Drama"] },
    { "id": "cf4d9b01-1eeb-4fba-aad5-5c1d7fd7e9a4", "title": "Rosetta", "year": 2009, "cover": "http://dummyimage.com/207x228.png/dddddd/000000", "description": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.", "duration": 1888, "contentRating": "PG", "source": "https://ebay.com/lobortis/convallis/tortor/risus/dapibus/augue/vel.jsp", "tags": ["Drama|Romance", "Horror", "Comedy|Drama"] },
    { "id": "a531f94d-1212-482f-a830-486b24e95cf2", "title": "Illtown", "year": 2009, "cover": "http://dummyimage.com/182x196.jpg/cc0000/ffffff", "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.", "duration": 2013, "contentRating": "PG", "source": "http://ibm.com/sed/tristique/in.json", "tags": ["Drama|Romance", "Comedy|War", "Documentary", "Drama"] },
    { "id": "0b15ec1e-d921-4866-8a96-b39737c2727b", "title": "Looker", "year": 2005, "cover": "http://dummyimage.com/245x203.jpg/dddddd/000000", "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.", "duration": 1922, "contentRating": "G", "source": "https://1und1.de/ullamcorper.html", "tags": ["Drama|Sci-Fi|Thriller"] },
    { "id": "0dec3594-d6fd-4a84-b502-601c415c9a50", "title": "Foul King, The (Banchikwang)", "year": 1992, "cover": "http://dummyimage.com/135x228.png/ff4444/ffffff", "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.", "duration": 1965, "contentRating": "PG", "source": "http://wsj.com/duis/ac/nibh/fusce.aspx", "tags": ["Drama|Horror"] },
    { "id": "27c52ce1-6cee-4393-9dfb-080d8ddf1967", "title": "I Am Taraneh, I Am Fifteen Years Old (Man, taraneh, panzdah sal daram)", "year": 2001, "cover": "http://dummyimage.com/154x234.png/5fa2dd/ffffff", "description": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.", "duration": 2025, "contentRating": "R", "source": "https://seesaa.net/nibh/fusce/lacus.json", "tags": ["Drama", "Drama"] },
    { "id": "076d672a-0d60-4074-9770-f65fcc4e9fb2", "title": "Sambizanga", "year": 2006, "cover": "http://dummyimage.com/108x142.bmp/dddddd/000000", "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.", "duration": 1929, "contentRating": "PG", "source": "https://pbs.org/nam/dui/proin/leo/odio/porttitor/id.aspx", "tags": ["Drama"] },
    { "id": "004085a3-cc2f-4225-9065-a49d04844848", "title": "Way Down East", "year": 2010, "cover": "http://dummyimage.com/218x108.bmp/ff4444/ffffff", "description": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.", "duration": 2042, "contentRating": "PG-13", "source": "http://tumblr.com/in/magna/bibendum.png", "tags": ["Drama", "Comedy|Drama|Musical|Romance", "Drama"] },
    { "id": "74327eb7-bcd6-4305-837b-4a60eb7688ca", "title": "Cowboys, The", "year": 2011, "cover": "http://dummyimage.com/139x181.bmp/ff4444/ffffff", "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.", "duration": 2043, "contentRating": "G", "source": "http://drupal.org/eu/tincidunt/in/leo/maecenas/pulvinar.aspx", "tags": ["Drama|Film-Noir", "Drama|Mystery"] },
    { "id": "46a7e265-5e83-452b-b007-7ed5d40a4fff", "title": "House of Wax", "year": 2007, "cover": "http://dummyimage.com/161x176.bmp/cc0000/ffffff", "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.", "duration": 1947, "contentRating": "PG-13", "source": "http://thetimes.co.uk/lectus/in/quam/fringilla.png", "tags": ["Drama", "Drama"] }
  ];

const filteredMoviesMocks = tag => {
  return moviesMock.filter(movie => movie.tags.includes(tag));
};

class MovieServiceMock {
  async getMovies() {
    return Promise.resolve(moviesMock);
  }

  // eslint-disable-next-line no-unused-vars
  async getMovie({ movieId }) {
    return Promise.resolve(moviesMock[0]);
  }

  async createMovie() {
    return Promise.resolve(moviesMock[0]);
  }
}

module.exports = {
  moviesMock,
  filteredMoviesMocks,
  MovieServiceMock
};