import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { validadteUserPermissions } from "../utils/validadeUserPermissions";

type UseCanParams = {
    permissions?: string[];
    roles?: string[];
};

export function useCan({ permissions, roles}: UseCanParams) {
    const { user, isAuthenticated} = useContext(AuthContext)

    if(!isAuthenticated) {
        return false;
    }

    const userHasValidPermissions = validadteUserPermissions({
        user,
        permissions,
        roles
    })

    return userHasValidPermissions;
}