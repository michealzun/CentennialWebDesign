//yueyang(micheal) sun 300933625
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Web.Configuration;

public partial class MatchScheduling : System.Web.UI.Page
{
    int clubASelection=-1;
    int clubBSelection=-1;
    protected void Page_PreInit(object sender, EventArgs e)
    {
        HttpCookie theme = Request.Cookies["theme"];
        if (theme == null)
        {
            Page.Theme = "Dark";
        }
        else { Page.Theme = theme.Value; }



    }
    protected void Page_Load(object sender, EventArgs e)//populate the club select when creating a new schedule
    {
        if (!IsPostBack)
        {
            populateSchedules();
        }
    }
    private void populateSchedules()
    {
        firstClub.Items.Clear();
        secondClub.Items.Clear();
        SqlConnection conn = new SqlConnection(WebConfigurationManager.ConnectionStrings["Potato"].ConnectionString);
        SqlCommand comm = new SqlCommand("SELECT CName from club", conn);
        SqlDataReader reader;
        try
        {
            conn.Open();
            reader = comm.ExecuteReader();
            while (reader.Read())
            {
                firstClub.Items.Add((string)reader["CName"]);
                secondClub.Items.Add((string)reader["CName"]);
            }
            reader.Close();
        }
        finally
        {
            conn.Close();
        }
    }

    protected void AddSchedule_Click(object sender, EventArgs e)//insert new schedule data into database and refresh
    {
        if (Page.IsValid)
        {
            SqlConnection conn = new SqlConnection(WebConfigurationManager.ConnectionStrings["Potato"].ConnectionString);
            SqlCommand comm = new SqlCommand("Insert Into matchSchedule (ClubA,ClubB,MatchDate) Values (@ClubA,@ClubB,@matchDate)", conn);
            comm.Parameters.Add("@ClubA", System.Data.SqlDbType.VarChar);
            comm.Parameters.Add("@ClubB", System.Data.SqlDbType.VarChar);
            comm.Parameters.Add("@matchDate", System.Data.SqlDbType.Date);
            comm.Parameters["@ClubA"].Value = firstClub.SelectedValue;
            comm.Parameters["@ClubB"].Value = secondClub.SelectedValue;
            comm.Parameters["@matchDate"].Value = matchDate.SelectedDate;
            try
            {
                conn.Open();
                comm.ExecuteNonQuery();
            }
            finally
            {
                conn.Close();
            }
            Response.Redirect(Request.RawUrl);
        }
    }

}
//yueyang(micheal) sun 300933625