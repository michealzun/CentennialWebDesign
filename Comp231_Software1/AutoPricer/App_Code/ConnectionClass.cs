using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;

/// <summary>
/// Summary description for ConnectionClass
/// </summary>
public class ConnectionClass
{
    private static SqlConnection cn;
    private static SqlCommand cmd;

    static ConnectionClass()
    {
        cn = new SqlConnection(@"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\AutoDB.mdf;Integrated Security=True");
    }

    public static void AddCarInfo(Carinfo Carinfo)
    {
        //string query = string.Format(@"Insert into Reviews Values ({0}, {1}, {2}, '{3}', '{4}', '{5}', '{6}')",
        //  Carinfo.carID, Carinfo.garageID, 
        //  Carinfo.model, Carinfo.make, Carinfo.milage, Carinfo.engine, Carinfo.condition);

        string query = string.Format(@"Insert into Car Values ({0}, {1}, '{2}', '{3}', '{4}', '{5}', '{6}')",
               Carinfo.carID, Carinfo.garageID, Carinfo.model, Carinfo.make, Carinfo.milage, Carinfo.engine, Carinfo.condition);
        cmd = new SqlCommand(query, cn);

        try
        {
            cn.Open();
            cmd.ExecuteNonQuery();
        }
        catch (Exception ex)
        {
            throw ex;
        }
        finally
        {
            cn.Close();
        }
    }



}