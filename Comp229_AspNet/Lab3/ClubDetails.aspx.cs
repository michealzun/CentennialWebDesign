//yueyang(micheal) sun 300933625
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Web.Configuration;

public partial class ClubDetails : System.Web.UI.Page
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
        //bind the club data using the selectedclub name given in the previous page  
        SqlConnection conn = new SqlConnection(WebConfigurationManager.ConnectionStrings["Potato"].ConnectionString);
        SqlCommand comm = new SqlCommand("SELECT * from club where CName = @CName", conn);
        comm.Parameters.Add("@CName", System.Data.SqlDbType.VarChar);
        comm.Parameters["@CName"].Value = (string)Session["SelectedClub"];
        SqlDataReader reader;
        try
        {
            conn.Open();
            reader = comm.ExecuteReader();
            DataList.DataSource = reader;
            DataList.DataBind();
            reader.Close();
        }
        finally
        {
            conn.Close();
        }
        
    }

    protected void ClubItemCommand(object o, DataListCommandEventArgs e)
    {
        if (e.CommandName == "Delete")
        {
            //delete the row using the selectedclub name given in the previous page  
            SqlConnection conn = new SqlConnection(WebConfigurationManager.ConnectionStrings["Potato"].ConnectionString);
            SqlCommand comm = new SqlCommand("delete from club where CName = @CName", conn);
            comm.Parameters.Add("@CName", System.Data.SqlDbType.VarChar);
            comm.Parameters["@CName"].Value = e.CommandArgument;
            try
            {
                conn.Open();
                comm.ExecuteNonQuery();
            }
            finally
            {
                conn.Close();
                Response.Redirect("Clubs.aspx");
            }
        }
    }
}
//yueyang(micheal) sun 300933625