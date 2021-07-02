import React, { useState, useEffect } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import { Skills, companyTypes, jobTypes, Countries, Jobs } from '../services/Database'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: { marginTop: theme.spacing(2) }
  })
)

const Content = () => {
  const classes = useStyles()
  const [skill, setSkill] = useState<number>(0)
  const [companyType, setCompanyType] = useState<number>(10)
  const [jobType, setJobType] = useState<number>(14)
  const [country, setCountry] = useState<number>(18)
  const [list, setList] = useState<any>(Jobs)

  const handleSkill = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSkill(event.target.value as number)
  }

  const handleCompanyType = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCompanyType(event.target.value as number)
  }

  const handleJobType = (event: React.ChangeEvent<{ value: unknown }>) => {
    setJobType(event.target.value as number)
  }

  const handleCountry = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCountry(event.target.value as number)
  }

  useEffect(() => {
    if(Number(skill) === 0) {
      setList(Jobs)
    } else {
      let temp: any[] = []
      for(let i = 0; i < Jobs.length; i++) {
        if(Jobs[i].skills.indexOf(Number(skill)) >= 0) {
          temp.push(Jobs[i])
        }
      }
      setList(temp)
    }
  }, [skill])

  useEffect(() => {
    if(Number(companyType) === 10) {
      setList(Jobs)
    } else {
      let temp: any[] = []
      for(let i = 0; i < Jobs.length; i++) {
        if(Jobs[i].companyType === Number(companyType)) {
          temp.push(Jobs[i])
        }
      }
      setList(temp)
    }
  }, [companyType])

  useEffect(() => {
    if(Number(jobType) === 14) {
      setList(Jobs)
    } else {
      let temp: any[] = []
      for(let i = 0; i < Jobs.length; i++) {
        if(Jobs[i].jobType === Number(jobType)) {
          temp.push(Jobs[i])
        }
      }
      setList(temp)
    }
  }, [jobType])

  useEffect(() => {
    if(Number(country) === 18) {
      setList(Jobs)
    } else {
      let temp: any[] = []
      for(let i = 0; i < Jobs.length; i++) {
        if(Jobs[i].location === Number(country)) {
          temp.push(Jobs[i])
        }
      }
      setList(temp)
    }
  }, [country])

  return (
		<div className="content">
      <div className="content-form">
        <FormControl className={classes.formControl}>
          <InputLabel id="skill-label">Skill</InputLabel>
          <Select labelId="skill-label" value={skill} onChange={handleSkill}>
            {Object.keys(Skills).map((id) => { return (<MenuItem key={id} value={id}>{Skills[id]}</MenuItem>) })}
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel id="companyType-label">Company Type</InputLabel>
          <Select labelId="companyType-label" value={companyType} onChange={handleCompanyType}>
            {Object.keys(companyTypes).map((id) => { return (<MenuItem key={id} value={id}>{companyTypes[id]}</MenuItem>) })}
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel id="jobType-label">Job Type</InputLabel>
          <Select labelId="jobType-label" value={jobType} onChange={handleJobType}>
            {Object.keys(jobTypes).map((id) => { return (<MenuItem key={id} value={id}>{jobTypes[id]}</MenuItem>) })}
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel id="countries-label">Country</InputLabel>
          <Select labelId="countries-label" value={country} onChange={handleCountry}>
            {Object.keys(Countries).map((id) => { return (<MenuItem key={id} value={id}>{Countries[id]}</MenuItem>) })}
          </Select>
        </FormControl>
      </div>

      <div className="items-list">
        {list && list?.length > 0 ? 
          <div className="list">
            {list?.map((job: { id: React.Key; tittle: string; description: string | null | undefined; skills: number[]; location: number; companyType: number; jobType: number; }) => {
              return (
                <div className="item" key={job.id}>
                  <span className="name">{job.tittle}</span>
                  <span className="description">{job.description}</span>
                  <br /><br />
                  <div className="skills">
                    {job.skills.map(id => { return (<span>{Skills[id]}</span>) })}
                  </div>
                  <br /><br />
                  <div className="other">
                    <span>{Countries[job.location]}</span>
                    <span>{companyTypes[job.companyType]}</span>
                    <span>{jobTypes[job.jobType]}</span>
                  </div>
                </div>
              )
            })}
          </div>
        :
          <span className="error-msg">Nothing to list.</span>
        }
      </div>
    </div>
	);
}

export default Content;
