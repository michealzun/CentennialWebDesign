CREATE TABLE Club(
	CRegNumber INT PRIMARY KEY,
	CName VARCHAR(20),
	CCity VARCHAR(20),
	CAddress VARCHAR(30)
)
CREATE TABLE Player(
	PRegNumber INT identity(1000,1) PRIMARY KEY,
	PName VARCHAR(20),
	PBirthday DATE,
	PJersey INT,
	Club_FK VARCHAR(20)
)
CREATE TABLE matchSchedule(
	ScheduleID INT identity(1000,1) PRIMARY KEY,
	ClubA VARCHAR(20),
	ClubB VARCHAR(20),
	MatchDate DATE
) ;