using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for Player
/// </summary>
public class Player
{
    public Player()
    {

    }
    private int primaryKey;
    public int PrimaryKey
    {
        get; set;
    }

    private string name;
    public string Name
    {
        get; set;
    }
    private DateTime birthday;
    public DateTime Birthday
    {
        get; set;
    }
    private int jersey;
    public int Jersey
    {
        get; set;
    }
    private string clubIn;
    public string ClubIn
    {
        get; set;
    }

}