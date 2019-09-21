//yueyang(micheal) sun 300933625
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Web.Configuration;

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
        if (Session["CurrentClub"] != null) //disable add player if there's no club seleciton
        {
            Button2.Enabled = true;
        }
        else
        {
            Button2.Enabled = false;
        }
    }

    protected void SaveClub(object sender, EventArgs e)
    {
        if (Page.IsValid)
        {
            //insert into the club table
            SqlConnection conn = new SqlConnection(WebConfigurationManager.ConnectionStrings["Potato"].ConnectionString);
            SqlCommand comm = new SqlCommand("Insert Into Club (CRegNumber,CName,CCity,CAddress) Values (@CRegNumber,@CName,@CCity,@CAddress)", conn);
            comm.Parameters.Add("@CRegNumber", System.Data.SqlDbType.Int);
            comm.Parameters.Add("@CName", System.Data.SqlDbType.VarChar);
            comm.Parameters.Add("@CCity", System.Data.SqlDbType.VarChar);
            comm.Parameters.Add("@CAddress", System.Data.SqlDbType.VarChar);
            comm.Parameters["@CRegNumber"].Value = Convert.ToInt32(regN.TextBox);
            comm.Parameters["@CName"].Value = namecity.TextA;
            comm.Parameters["@CCity"].Value = namecity.TextB;
            comm.Parameters["@CAddress"].Value = addr.TextBox;
            try
            {
                conn.Open();
                comm.ExecuteNonQuery();
            }
            finally
            { 
                conn.Close();
            }
            Session["CurrentClub"] = namecity.TextA;
            /* lab 2 stuff
            Application["ClubPK"] = (int)Application["ClubPK"] + 1;
            ((List<Club>)Application["Clubs"]).Add(new Club
            {
                PrimaryKey = (int)Application["ClubPK"],
                Name = namecity.TextA,
                City = namecity.TextB,
                RegistrationNumber = Convert.ToInt32(regN.TextBox),
                Address = addr.TextBox
            });
            */
            Button2.Enabled = true;
        }
    }
    protected void SavePlayer(object sender, EventArgs e)
    {
        if (Page.IsValid)
        {
            //insert into the player table
            SqlConnection conn = new SqlConnection(WebConfigurationManager.ConnectionStrings["Potato"].ConnectionString);
            SqlCommand comm = new SqlCommand("Insert Into Player (PName,PBirthday,PJersey,Club_FK) Values (@PName,@PBirthday,@PJersey,@Club_FK)", conn);
            comm.Parameters.Add("@PName", System.Data.SqlDbType.VarChar);
            comm.Parameters.Add("@PBirthday", System.Data.SqlDbType.Date);
            comm.Parameters.Add("@PJersey", System.Data.SqlDbType.Int);
            comm.Parameters.Add("@Club_FK", System.Data.SqlDbType.VarChar);
            comm.Parameters["@PName"].Value = playerName.TextBox;
            comm.Parameters["@PBirthday"].Value = Convert.ToDateTime(birthday.TextBox);
            comm.Parameters["@PJersey"].Value = Convert.ToInt32(jerseyNumber.TextBox);
            comm.Parameters["@Club_FK"].Value = (string)Session["CurrentClub"];
            try
            {
                conn.Open();
                comm.ExecuteNonQuery();
            }
            finally
            {
                conn.Close();
            }
            /* lab 2 stuff
            Application["PlayerPK"] = (int)Application["PlayerPK"] + 1;
            ((List<Player>)Application["Players"]).Add(new Player
            {
                PrimaryKey = (int)Application["PlayerPK"],
                Name = playerName.TextBox,
                Birthday = Convert.ToDateTime(birthday.TextBox),
                Jersey = Convert.ToInt32(jerseyNumber.TextBox),
                ClubIn = (string)Session["CurrentClub"]
            });
            */
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
//yueyang(micheal) sun 300933625