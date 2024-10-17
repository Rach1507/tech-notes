import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Calendar, GitBranch, Star } from 'lucide-react';

const GitHubProfile = ({ username = 'yourusername' }) => {
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [contributions, setContributions] = useState(0);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        const userData = await userResponse.json();
        setUserData(userData);

        // Fetch repositories
        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=5`
        );
        const reposData = await reposResponse.json();
        setRepos(reposData);

      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      }
    };

    fetchGitHubData();
  }, [username]);
    // Function to get PR state color
    const getPRStateColor = (state) => {
        switch (state) {
          case 'open':
            return 'text-green-500';
          case 'closed':
            return 'text-red-500';
          case 'merged':
            return 'text-purple-500';
          default:
            return 'text-gray-500';
        }
      };
    
      // Function to get PR state icon
      const getPRStateIcon = (state) => {
        switch (state) {
          case 'open':
            return <GitPullRequest className="w-4 h-4 text-green-500" />;
          case 'closed':
            return <XCircle className="w-4 h-4 text-red-500" />;
          case 'merged':
            return <CheckCircle2 className="w-4 h-4 text-purple-500" />;
          default:
            return <GitPullRequest className="w-4 h-4 text-gray-500" />;
        }
      };

        // Function to format the date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.RelativeTimeFormat('en', { numeric: 'auto' }).format(
      Math.ceil((date - new Date()) / (1000 * 60 * 60 * 24)),
      'day'
    );
  };

//   const { user, pullRequests } = userData;

  if (!userData) {
    return (
      <div className="flex items-center justify-center w-full">
        <p className="text-gray-500">Loading GitHub profile...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 font-sans font-bold text-neutral-200  mb-2 mt-2">
      {/* Profile Stats Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 ">
            <img
              src={userData.avatar_url}
              alt={`${username}'s avatar`}
              className="w-10 h-10 rounded-full"
            />
            <span>{userData.name || username}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>{userData.public_repos} Public Repos</span>
            </div>
            <div className="flex items-center gap-2">
              <GitBranch className="w-5 h-5" />
              <span>{userData.followers} Followers</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>Since {new Date(userData.created_at).getFullYear()}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {/* <GitPullRequest className="w-5 h-5" /> */}
            Latest Pull Requests 
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* {pullRequests.map((pr) => (
              <div
                key={pr.id}
                className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-2">
                    {getPRStateIcon(pr.state)}
                    <div>
                      <a
                        href={pr.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-blue-600 hover:underline"
                      >
                        {pr.title}
                      </a>
                      <p className="text-sm text-gray-600 mt-1">
                        {pr.repository_url.split('/').slice(-1)} #{pr.number}
                      </p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">
                    {formatDate(pr.updated_at)}
                  </span>
                </div>
                
                {pr.body && (
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                    {pr.body}
                  </p>
                )}
                
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                  <span className={`flex items-center gap-1 ${getPRStateColor(pr.state)}`}>
                    {pr.state.charAt(0).toUpperCase() + pr.state.slice(1)}
                  </span>
                  {pr.comments > 0 && (
                    <span className="flex items-center gap-1">
                      💬 {pr.comments} comments
                    </span>
                  )} */}
                {/* </div>
              </div>
            ))} */}
          </div>
        </CardContent>
      </Card>

      {/* Recent Repositories Card
      <Card>
        <CardHeader>
          <CardTitle>Recent Repositories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className=" grid grid-cols-3 grid-rows-1 gap-5 ">
            {repos.slice(0,3).map((repo) => (
              <div
                key={repo.id}
                className="p-4 rounded-lg transition-colors  border  dark:border-white/[0.2] border-transparent  shadow"
              >
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:underline"
                >
                  {repo.name}
                </a>
                {/* <p className="text-sm font-normal mt-1">{repo.description}</p> 
                <div className="flex items-center gap-4 mt-2 text-sm  font-normal ">
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitBranch className="w-4 h-4" />
                    {repo.forks_count}
                  </span>
                  <span>Updated {new Date(repo.updated_at).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>  */}

      {/* GitHub Contribution Graph */}
      <Card>
        <CardHeader>
          <CardTitle>Contribution Graph :
             <span className='my-4 block font-normal text-sm text-slate-300 font-texturina text-pretty '> Since I have setup the Github APIs , Im getting that itch , what itch ? ...... But I dont think it matters .  </span></CardTitle>
        </CardHeader>
        <CardContent>
          <div className="w-full h-32 flex items-center justify-center">
          {/* <img src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=dark`}/>
          <img src={`https://github-readme-streak-stats.herokuapp.com?user=${username}&theme=dark&hide_border=true`} /> */}
            <img
              src={`https://ghchart.rshah.org/${username}`}
              alt="GitHub Contribution Graph"
              className="w-full"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GitHubProfile;