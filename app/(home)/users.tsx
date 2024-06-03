import Loading from '@/components/Loading';
import UserListItem from '@/components/UserListItem';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/provider/AuthProvider';
import {useEffect, useState} from 'react';     
import { FlatList,Text } from 'react-native';
export default function UserScreen(){
    const {user} = useAuth();
    const[loading,setLoading] = useState(false);
    const[users,setUsers] = useState<any[] | null>([]);
    useEffect(()=>{
        const fetchUsers = async()=>{   
            setLoading(true);       
            let { data: profiles, error } = await supabase
            .from('profiles')
            .select('*')
            .neq('id',user?.id) //exclude me
            setUsers(profiles);
            setLoading(false)
        }
        fetchUsers()
    },[])
    return(
        loading ? <Loading/> :
        <FlatList
        data={users}
        contentContainerStyle={{gap: 5}}
        renderItem={({item})=><UserListItem user={item}/>}
        />
        
    )
}