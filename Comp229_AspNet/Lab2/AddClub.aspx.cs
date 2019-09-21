using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class AddClub : System.Web.UI.Page
{
    protected void Page_PreInit(object sender, EventArgs e)
    {
        HttpCookie theme = Request.Cookies["theme"];
        if (theme == null)
        {
            Page.Theme = "Dark";
        }
        else { Page.Theme = theme.Value; }
    }
    protected void Page_Load(object sender, EventArgs e)
    {
        Button2.Enabled = false; //disable add player at the beginnning
    }

    protected void SaveClub(object sender, EventArgs e)
    {
        if (Page.IsValid)
        {
            Application["ClubPK"] = (int)Application["ClubPK"] + 1;
            Session["CurrentClub"] = namecity.TextA;
            ((List<Club>)Application["Clubs"]).Add(new Club
            {
                PrimaryKey = (int)Application["ClubPK"],
                Name = namecity.TextA,
                City = namecity.TextB,
                RegistrationNumber = Convert.ToInt32(regN.TextBox),
                Address = addr.TextBox
            });
            Button2.Enabled = true;
        }
    }
    protected void SavePlayer(object sender, EventArgs e)
    {
        if (Page.IsValid)
        {
            Application["PlayerPK"] = (int)Application["PlayerPK"] + 1;
            ((List<Player>)Application["Players"]).Add(new Player
            {
                PrimaryKey = (int)Application["PlayerPK"],
                Name = playerName.TextBox,
                Birthday = Convert.ToDateTime(birthday.TextBox),
                Jersey = Convert.ToInt32(jerseyNumber.TextBox),
                ClubIn = (string)Session["CurrentClub"]
            });
            Button2.Enabled = true;
        }
    }
    protected void CancelInput(object sender, EventArgs e) //reseting all textbox and the select club name strings to nothing, disable add player button
    {
        namecity.TextA = "";
        namecity.TextB = "";
        regN.TextBox = "";
        addr.TextBox = "";

        playerName.TextBox = "";
        birthday.TextBox = "";
        jerseyNumber.TextBox = "";

        Session["CurrentClub"] = null;
        Button2.Enabled = false;
    }
    protected void CancelInput2(object sender, EventArgs e)
    {
        playerName.TextBox = "";
        birthday.TextBox = "";
        jerseyNumber.TextBox = "";
    }
}