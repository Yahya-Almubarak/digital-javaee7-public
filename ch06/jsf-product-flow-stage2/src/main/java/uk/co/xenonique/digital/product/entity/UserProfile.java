package uk.co.xenonique.digital.product.entity;

import javax.persistence.*;
import java.io.Serializable;

/**
 * The type UserProfile.
 *
 * @author Peter Pilgrim (peter)
 */
@Entity
@Table(name="USER_PROFILE")
@NamedQueries({
        @NamedQuery(name="UserProfile.findAll",
                query = "select u from UserProfile u "),
        @NamedQuery(name="UserProfile.findById",
                query = "select u from UserProfile u where u.id = :id"),
        @NamedQuery(name="UserProfile.findByUsername",
                query = "select u from UserProfile u where u.username = :username"),
})
public class UserProfile implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String username;
    private String password;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "FK_USER_ROLE_ID" )
    private UserRole role;

    public UserProfile() {
        this(null,null, null);
    }

    public UserProfile(String username, String password, UserRole role) {
        this.username = username;
        this.password = password;
        this.role = role;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public UserRole getRole() {
        return role;
    }

    public void setRole(UserRole role) {
        this.role = role;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        UserProfile that = (UserProfile) o;

        if (id != that.id) return false;

        return true;
    }

    @Override
    public int hashCode() {
        return (int) (id ^ (id >>> 32));
    }

    @Override
    public String toString() {
        return "UserProfile" +
                "@"+Integer.toHexString(System.identityHashCode(this))+
                "{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", role=" + role +
                '}';
    }
}
