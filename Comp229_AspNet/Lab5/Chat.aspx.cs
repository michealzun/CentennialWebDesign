using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Web.Configuration;

public partial class Chat : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        GetMessages();
    }

    void AddMessage()
    {
        SqlConnection conn = new SqlConnection(WebConfigurationManager.ConnectionStrings["Potato"].ConnectionString);
        SqlCommand comm = new SqlCommand("insert into ChatMessage (ChatUser, ChatMessage,ChatTime) values(@ChatUser,@ChatMessage,@ChatTime)", conn);
        comm.Parameters.Add("@ChatUser", System.Data.SqlDbType.VarChar);
        comm.Parameters.Add("@ChatMessage", System.Data.SqlDbType.VarChar);
        comm.Parameters.Add("@ChatTime", System.Data.SqlDbType.DateTime);
        if (ChatName.Text == null)
        {
            comm.Parameters["@ChatUser"].Value = "anonym";
        }
        else
        {
            comm.Parameters["@ChatUser"].Value = ChatName.Text;
        }
        comm.Parameters["@ChatMessage"].Value = InputText.Text;
        comm.Parameters["@ChatTime"].Value = DateTime.Now;
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

    void GetMessages()
    {
        SqlConnection conn = new SqlConnection(WebConfigurationManager.ConnectionStrings["Potato"].ConnectionString);
        SqlCommand comm = new SqlCommand("select TOP(15) ChatUser, ChatMessage, ChatTime from ChatMessage ", conn);
        SqlDataReader reader;
        try
        {
            conn.Open();
            reader = comm.ExecuteReader();
            while (reader.Read())
            {
                Label1.Text += (string)reader["ChatUser"] + ": " + (string)reader["ChatMessage"] + "   (" + Convert.ToDateTime(reader["ChatTime"]).ToString() + ")" + "<br/>";
            }
            reader.Close();
        }
        finally
        {
            conn.Close();
        }


    }

    protected void Send_Click(object sender, EventArgs e)
    {
        AddMessage();
    }
}