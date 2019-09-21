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
CREATE TABLE ChatMessage(
	ChatID INT identity(1000,1) PRIMARY KEY,
	ChatUser VARCHAR(20),
	ChatMessage VARCHAR(200),
	ChatTime DATE
) ;
INSERT INTO dbo.Club
(
    CRegNumber,
    CName,
    CCity,
    CAddress
)
VALUES
(   171717,
    '50thStreetBall',
    'A land far away',
    '50thStreet' 
)

INSERT INTO dbo.Club
(
    CRegNumber,
    CName,
    CCity,
    CAddress
)
VALUES
(   111111,
    'Vikings',
    'norway',
    'a boat' 
);


INSERT INTO dbo.Player
(
    PName,
    PBirthday,
    PJersey,
	Club_FK
)
VALUES
( 
	'Little Bear',
    '1990-01-02',
    11,
    'Vikings'
);

INSERT INTO dbo.Player
(
    PName,
    PBirthday,
    PJersey,
	Club_FK
)
VALUES
( 
	'Big Bear',
    '1990-01-01',
    10,
    'Vikings'
);


INSERT INTO dbo.Player
(
    PName,
    PBirthday,
    PJersey,
	Club_FK
)
VALUES
( 
	'Catnip',
    '1990-10-10',
    33,
    '50thStreet'
);

INSERT INTO dbo.Player
(
    PName,
    PBirthday,
    PJersey,
	Club_FK
)
VALUES
( 
	'Inuyama',
    '1988-08-08',
    22,
    '50thStreet'
);
INSERT INTO ChatMessage (ChatUser,ChatMessage,ChatTime)VALUES('Admin','test message',SYSDATETIME());