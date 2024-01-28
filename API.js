//The MovieShop class contains the user details and some static properties
class MovieShop {
    constructor(username, password, email) {
      this.user = {
        username: username,
        password: password,
        email: email,
        id: email,
      };
    }
  
    static borrowingFee = 50;
    static lateFee = 20;
  
    static movies = [
      {
        movieTitle: "A Tribe Called Judah",
        movieDescription:
          "Brothers plan to rob a small mall with their mother's help, but they are faced with armed robbers upon arriving.",
        genre: ["Comedy",],
        year: 2023,
        id: 1,
      },
      {
        movieTitle: "Bad Boys and Bridesmaids",
        movieDescription:
          "The story of three women who move mountains to protect a pact they all took as teenagers and the men who do the same just to stop them.",
        genre: ["Romance"],
        year: 2023,
        id: 2,
      },
      {
        movieTitle: "A Day and a Half",
        movieDescription:
          "In a desperate bid to reunite with his daughter, an armed man bursts into the medical center where his estranged wife works and kidnaps her.",
        genre: ["Action"],
        year: 2023,
        id: 3,
      },
      {
        movieTitle: "The Last Voyage of the Demeter",
        movieDescription:
          "The crew of the merchant ship Demeter attempts to survive the ocean voyage from Carpathia to London as they are stalked each night by a merciless presence onboard the ship.",
        genre: ["Fantasy", "Horror"],
        year: 2023,
        id: 4,
      },
      {
        movieTitle: "The Trench",
        movieDescription:
          "An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.",
        genre: ["Fantasy", "Adventure", "Horror"],
        year: 2023,
        id: 5,
      },
    ];
  }
  
  //User details variables are declared globally to avoid error due to variable scope
  let username, password, email;
  
  //The readline module is used to create interface for communicating with users
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  //The user begins to interact with the API from here
  console.log("Hello, you are welcome to Kathy's Film House");
  readline.question("What Should we call you: ", (response) => {
    username = response;
    readline.question("Input your email address: ", (mail) => {
      email = mail;
      readline.question("password: ", (pass) => {
        password = pass;
  
        console.log("Movie List:");
        MovieShop.movies.forEach((item, index) => {
          let num = index + 1;
          console.log(`${num} ${item.movieTitle}`);
        });
        readline.question("Pick a number to continue: ", (reply) => {
          choiceProcess(reply);
        });
      });
    });
  });
  
  // This function handles the user's choice in the readline operation above
  function choiceProcess(choice) {
    switch (choice) {
      case "1":
        console.log("A little intro:");
        console.log(MovieShop.movies[0].movieDescription);
        console.log(`Borrowing Fee: $${MovieShop.borrowingFee}`);
        console.log(`Late Fee: $${MovieShop.lateFee}`);
        payment();
        break;
  
      case "2":
        console.log("A little intro:");
        console.log(MovieShop.movies[1].movieDescription);
        console.log(`Borrowing Fee: $${MovieShop.borrowingFee}`);
        console.log(`Late Fee: $${MovieShop.lateFee}`);
        payment();
        break;
  
      case "3":
        console.log("A little intro:");
        console.log(MovieShop.movies[2].movieDescription);
        console.log(`Borrowing Fee: $${MovieShop.borrowingFee}`);
        console.log(`Late Fee: $${MovieShop.lateFee}`);
        payment();
        break;
  
      case "4":
        console.log("A little intro:");
        console.log(MovieShop.movies[3].movieDescription);
        console.log(`Borrowing Fee: $${MovieShop.borrowingFee}`);
        console.log(`Late Fee: $${MovieShop.lateFee}`);
        payment();
        break;
  
      case "5":
        console.log("A little intro:");
        console.log(MovieShop.movies[4].movieDescription);
        console.log(`Borrowing Fee: $${MovieShop.borrowingFee}`);
        console.log(`Late Fee: $${MovieShop.lateFee}`);
        payment();
        break;
  
      default:
        break;
    }
  }
  
  // This function handles payment when called and ends the program
  function payment() {
    let movieList = new MovieShop(username, password, email);
    readline.question(
      "Enter {Yes} to continue and {No} to cancel: ",
      (payOption) => {
        payOption.toLowerCase();
        switch (payOption) {
          case "yes":
            console.log(`You will be charged $50 for renting this movie\n
          Do well to return it in a week's time or pay a late fee of $20\n
          When returning the movie come along with these details\n
          username: ${movieList.user.username}\n
          email: ${movieList.user.email}\n
          password: ${movieList.user.password}
          Thanks for using our service, we hope you enjoy your movie.`);
            readline.close();
            break;
  
          case "n":
            console.log(
              `Thanks for checking out our service, we hope you patronize us next time.`,
            );
            readline.close();
            break;
  
          default:
            console.log("Sorry Invalid Option.");
            readline.close();
            break;
        }
      },
    );
  }
  