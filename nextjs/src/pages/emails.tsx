import { NextPage } from "next";
import { FormEvent } from "react";
import useSWR from "swr";
import http from "../utils/https";
import { Button } from "../components/Button";
import { Title } from "../components/Title";

const fetcher = (url:string) => 
  http.get(url).then((res) => res.data === "" ? [] : res.data.emails
);

const EmailsPage: NextPage = () => {
  const {data} = useSWR("mail-list", fetcher, {fallbackData: []})

  async function onSubmit(event: FormEvent){
    event.preventDefault();
    const emailTextarea = document.getElementById("emails") as HTMLTextAreaElement;
    await http.post('mail-list', {emails: emailTextarea.value.split("\n")});
  }

  return (
    <div>
      <Title title="Emails"/>
      <div className="border-b mb-4"/>
      <form 
          onSubmit={onSubmit}>
        <div className="mb-4">
          <textarea 
            id="emails"
            rows={10}
            className="
              bg-default
              border rounded w-full py-2 px-3 text-black leading-tight 
              focus:outline-none focus:shadow-outline
              dark:text-white
            "
            defaultValue={data.join('\n')}
          ></textarea>
        </div>
         <Button>Salvar</Button>
      </form>
    </div>
  );
}

export default EmailsPage;